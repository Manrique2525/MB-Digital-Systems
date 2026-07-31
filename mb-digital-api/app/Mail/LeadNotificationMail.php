<?php

namespace App\Mail;

use App\Models\Lead;
use App\Models\Setting;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class LeadNotificationMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public Lead $lead,
        public array $timeline = [],
    ) {}

    public function envelope(): Envelope
    {
        $sourceLabel = $this->lead->source->label();

        return new Envelope(
            subject: "🎯 Nuevo lead: {$this->lead->name} - {$sourceLabel}",
            from: Setting::string('admin_email', (string) config('tracking.admin_email')),
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.lead-notification',
        );
    }
}
