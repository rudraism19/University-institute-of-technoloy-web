import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AddEventModalProps {
    isOpen: boolean;
    onClose: () => void;
    onEventAdded: () => void;
}

export function AddEventModal({ isOpen, onClose, onEventAdded }: AddEventModalProps) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        event_date: '',
        prize: '',
        location: '',
        category: 'Cultural',
        max_participants: '',
        image_url: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('events')
                .insert([
                    {
                        ...formData,
                        max_participants: parseInt(formData.max_participants) || 0,
                        event_date: new Date(formData.event_date).toISOString() // Ensure ISO format
                    }
                ]);

            if (error) {
                toast.error(`Failed to add event: ${error.message}`);
            } else {
                toast.success("Event added successfully!");
                onEventAdded();
                onClose();
                // Reset form
                setFormData({
                    title: '',
                    description: '',
                    event_date: '',
                    prize: '',
                    location: '',
                    category: 'Cultural',
                    max_participants: '',
                    image_url: ''
                });
            }
        } catch (error) {
            console.error("Error adding event:", error);
            toast.error("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add New Event</DialogTitle>
                    <DialogDescription>
                        Fill in the details to create a new event.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="category">Category</Label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="Cultural">Cultural</option>
                                <option value="Technical">Technical</option>
                                <option value="Sports">Sports</option>
                                <option value="Academic">Academic</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="event_date">Date</Label>
                            <Input id="event_date" name="event_date" type="datetime-local" value={formData.event_date} onChange={handleChange} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" name="location" value={formData.location} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="prize">Prize Pool</Label>
                            <Input id="prize" name="prize" value={formData.prize} onChange={handleChange} placeholder="e.g. ₹5000" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="max_participants">Max Participants</Label>
                            <Input id="max_participants" name="max_participants" type="number" value={formData.max_participants} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="image_url">Image URL</Label>
                        <Input id="image_url" name="image_url" value={formData.image_url} onChange={handleChange} placeholder="https://..." />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? "Adding Event..." : "Add Event"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
