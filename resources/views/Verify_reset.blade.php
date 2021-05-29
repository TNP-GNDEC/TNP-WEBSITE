@component('mail::message')
# Reset Password
Your Email has been verified. 
Please Reset Your Password by clicking the button below

@component('mail::button', ['url' => url('/resetPassword', $tokenData->token).'?email='.urlencode($tokenData->email)])
	Verify & Reset Password
@endcomponent

Thanks,<br>
Training and Placement Cell
@endcomponent