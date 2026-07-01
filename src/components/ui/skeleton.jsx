import { MessageSquare, MessageSquareText } from "lucide-react";

export function PostSkeletton() {

    return(
        <div className="flex flex-col justify-between p-4 rounded-xl border border-muted/10 bg-surface-card animate-pulse">
            <div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted mb-2">
                    <MessageSquareText size={12} />
                    <span className="h-4 w-3/4 bg-muted/20 rounded"></span>
                </div>
                <div className="h-4 w-3/4 bg-muted/20 rounded mb-2"></div>
                <div className="h-3 w-full bg-muted/10 rounded mb-1"></div>
                <div className="h-3 w-full bg-muted/10 rounded mb-1"></div>
                <div className="h-3 w-2/3 bg-muted/10 rounded"></div>

            </div>
        </div>
    )
    
}

export function PostDetailSkeletton() {
    return (
        <div className="max-w-3xl mx-auto mt-8 animate-pulse px-4">
            <div className="h-4 w-24 bg-[var(--muted)]/20 rounded mb-8"></div>
            <div className="h-8 w-3/4 bg-[var(--muted)]/20 rounded mb-4"></div>
            <div className="h-4 w-1/2 bg-[var(--muted)]/10 rounded mb-8"></div>
            <div className="space-y-3">
                <div className="h-4 w-full bg-[var(--muted)]/10 rounded"></div>
                <div className="h-4 w-full bg-[var(--muted)]/10 rounded"></div>
                <div className="h-4 w-2/3 bg-[var(--muted)]/10 rounded"></div>
            </div>
        </div>
    );
    
}