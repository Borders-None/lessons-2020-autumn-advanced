# Homework

First download node and run the e-mail REST API server locally. If you need any help with that, please the teachers.

During the POST request in which we are sending the e-mail the form is enabled, meaning we can hit the send button many times eventhough the current send email request is not processed. That means that if someone is really impatiant, they will accidentally send more than one e-mail by accident.

Your job is to disable the send button from the moment it is clicked until the email is sent successfully or an error occurred (email validation failed, or the server returned an error).

You only need to edit the third form, and not the first 2 forms, so you are interested in and need to edit only the `sendEmailForm3ButtonClicked` function.

Hint: you can disable a button or input with the `disabled="true"` attribute.
