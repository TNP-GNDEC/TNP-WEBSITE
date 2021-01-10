<html>
	<head>
		<title>
			Reset Password
		</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

		<style>
			.drop{
				padding-top: 150px;
			}
		</style>
	</head>
	<body>
	
	<div class="container">
		<div class="row">
			<div class="offset-1 col-md-8">
				<div class="card ">
					
					<div class="card-body">
					
						<form method = "POST" action="/reset-password">
							@csrf

							<div class="form-group mb-4">
								<label>Email</label>
								<input type="email" name ="email" class="form-control"  placeholder="Please Enter Your Mail">
							</div>

							<div class="form-group mb-4">
								<label>New Password</label>
								<input type="password" name ="password" class="form-control"  placeholder="Your New Password">
							</div>

							<div class="form-group mb-4">
								<label>Confirm Password</label>
								<input type="password" name ="password_confirmation" class="form-control"  placeholder="Confirm Password">
							</div>

							<div class="form-group mb-4">
								<input type="hidden" name ="token" class="form-control"  value="{{$token}}">
							</div>

							<div class="form-group">
								<button class="btn btn-info btn-lg">Reset</button>
							</div>
						</form>

					</div>

					
				</div>
			</div>
		</div>
	</div>
	

</body>
</html>