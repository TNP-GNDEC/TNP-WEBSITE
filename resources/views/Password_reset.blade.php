@component('mail::message')
# Reset Password

Please Reset Your Password by clicking the button belovw

@component('mail::button', ['url' => url('/resetPassword', $tokenData->token).'?email='.urlencode($tokenData->email)])
	Reset Password
@endcomponent

Thanks,<br>
Training and Placement Cell
@endcomponent