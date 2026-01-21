import { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface VoiceNavigatorProps {
    onSectionChange: (section: string) => void;
}

const VoiceNavigator = ({ onSectionChange }: VoiceNavigatorProps) => {
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
    const [isSupported, setIsSupported] = useState(true);

    useEffect(() => {
        // Check for browser support
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognitionInstance = new SpeechRecognition();

            recognitionInstance.continuous = false;
            recognitionInstance.lang = 'en-US';
            recognitionInstance.interimResults = false;

            recognitionInstance.onstart = () => {
                setIsListening(true);
                toast.info("Listening...", { duration: 2000 });
            };

            recognitionInstance.onend = () => {
                setIsListening(false);
            };

            recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                console.log("Voice Command:", transcript);
                toast.success(`You said: "${transcript}"`);
                handleCommand(transcript);
            };

            recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
                console.error("Speech recognition error", event.error);
                setIsListening(false);
                if (event.error === 'not-allowed') {
                    toast.error("Microphone access denied.");
                } else {
                    toast.error("Didn't catch that. Try again.");
                }
            };

            setRecognition(recognitionInstance);
        } else {
            setIsSupported(false);
            console.warn("Web Speech API not supported in this browser.");
        }
    }, [onSectionChange]);

    const handleCommand = (command: string) => {
        // Mapping commands to sections
        if (command.includes("home")) onSectionChange("home");
        else if (command.includes("faculty") || command.includes("teacher")) onSectionChange("faculty");
        else if (command.includes("event") || command.includes("schedule")) onSectionChange("events");
        else if (command.includes("department") || command.includes("dept")) onSectionChange("department");
        else if (command.includes("contact") || command.includes("phone")) onSectionChange("contact-us");
        else if (command.includes("gallery") || command.includes("photo")) onSectionChange("gallery");
        else if (command.includes("dashboard") || command.includes("result") || command.includes("marks")) onSectionChange("dashboard");
        else if (command.includes("login") || command.includes("admin")) onSectionChange("home"); // Logic to open modal could be added
        else {
            toast.warning("Unknown command. Try 'Go to Home' or 'Show Faculty'");
        }
    };

    const toggleListening = () => {
        if (!isSupported) {
            toast.error("Voice control not supported in this browser.");
            return;
        }

        if (isListening) {
            recognition?.stop();
        } else {
            recognition?.start();
        }
    };

    if (!isSupported) return null;

    return (
        <Button
            onClick={toggleListening}
            variant={isListening ? "destructive" : "secondary"}
            size="icon"
            className={`fixed bottom-8 left-8 rounded-full w-12 h-12 shadow-lg z-50 transition-all duration-300 ${isListening ? "animate-pulse scale-110 shadow-red-500/50" : "hover:scale-105"
                }`}
            aria-label="Voice Navigation"
        >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </Button>
    );
};

export default VoiceNavigator;
