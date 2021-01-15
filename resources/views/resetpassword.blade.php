<!DOCTYPE html>
<html>
	<head>
		<title>
			Training and Placement Cell
		</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
		<link rel="icon" type="image/png" href="{{asset('images/logo2.png')}}"/>

		<style>
			.root{
				width: 100%;
				height: 100vh;
				background-color: #193b6819;
			}
			.header{
				width: 100%;
				margin: 0;
				background: #038ed4;
				padding: 10px;
			}
			.title{
				display: flex;
				justify-content: space-around;
				align-items: center;
				width: 320px; 
				margin: 0;
				margin-left: 30px;
			}
			.intro{
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
			h2{
				color: #ffffff;
				font-size: 20px;
			}
			.container{
				width: 100%;
			}
			.loginCard{
				width: 75%;
				margin: auto;
				margin-top: 45px;
				border-radius: 10px;
				box-shadow: 0px 15px 25px #00000033;
				background: #ffffff;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
			.hero{
				width: 50%;
				margin-top: 20px;
				margin-bottom: 20px;
			}
			.pic{
				width: 100%;
				border-radius: 3%;
			}
		</style>
	</head>
	<body>
	<div class="root">
	    <div class="header">
		    <div class="title">
		    <img src="{{asset('images/logo.png')}}" class="intro" />
			<h2>Training and Placement Cell</h2>
			</div>
		</div>
	    <div class="container">
			<div class="loginCard">
				<div class="hero">
				<img src="{{asset('images/reset.jpg')}}" class="pic" />
				</div>
						<div class="card ">
							<h1>Reset Password</h1>
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