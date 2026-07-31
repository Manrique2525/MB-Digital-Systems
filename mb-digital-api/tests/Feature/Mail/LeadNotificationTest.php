<?php

use App\Mail\LeadAutoresponseMail;
use App\Mail\LeadNotificationMail;
use App\Models\Lead;

it('renderiza el correo de notificación al admin', function () {
    $lead = Lead::factory()->create();

    $mailable = new LeadNotificationMail($lead);

    $mailable->assertHasSubject("🎯 Nuevo lead: {$lead->name} - {$lead->source->label()}");
    $mailable->assertSeeInHtml($lead->name);
    $mailable->assertSeeInHtml($lead->email);
    $mailable->assertSeeInHtml($lead->message);
});

it('renderiza el correo de autoresponse al lead', function () {
    $lead = Lead::factory()->create([
        'email' => 'cliente@example.com',
    ]);

    $mailable = new LeadAutoresponseMail($lead);

    $mailable->assertHasSubject('Recibimos tu solicitud - MB Digital Systems');
    $mailable->assertSeeInHtml($lead->name);
    $mailable->assertSeeInHtml('Gracias');
});
