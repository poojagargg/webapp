<?php
$conn=mysqli_connect("localhost","root","");
mysqli_select_db($conn,"parkinghero");
if(isset($_POST['submit']))
{
	$name=$_POST['name'];
	$pass=md5($_POST['password']);
	$email=$_POST['email'];
	$contactno=$_POST['contactno'];
	$confirmpass=md5($_POST['confirmpassword']);
	$managerID=$_POST['managerID'];
	

	$dt=mysqli_query($conn,"select * from `manager` where `email`='$email'") ;
		
	$ch=mysqli_num_rows($dt);
	if($ch!=1)
	{
	mysqli_query($conn,"INSERT INTO manager(name, password, email, contact, confirmpassword, managerID) VALUES ('$name','$pass','$email','$contactno','$confirmpass','$managerID')")
	or die(mysqli_error($conn));
	echo "<center><img src='assets/images/preloader.gif'></center>";
	echo"<script>alert('You are successfully registered');</script>";
	header("location:manager_login.php");
	}
	else
	{
		echo "<script>alert('You are already Registered.');location='manager.php'</script>";
	}
}
else
{
	header("location:manager.php");
}
?>