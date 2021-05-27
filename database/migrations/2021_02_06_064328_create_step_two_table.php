<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStepTwoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personaldetails', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('urn')->unsigned()->unique();
            $table->bigInteger('crn')->unsigned();
            $table->bigInteger('pincode')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->integer('height')->nullable();
            $table->integer('weight')->nullable();
            $table->string('gender')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('district')->nullable();
            $table->bigInteger('mobile')->nullable();
            $table->bigInteger('whatsapp')->nullable();
            $table->string('father_name')->nullable();
            $table->bigInteger('father_mobile')->nullable();
            $table->string('mother_name')->nullable();
            $table->bigInteger('mother_mobile')->nullable();
            $table->string('stream')->nullable();
            $table->string('blood_group')->nullable();
            $table->string('branch_type')->nullable();
            $table->string('category')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('training_sem')->nullable();
            $table->string('shift')->nullable();
            $table->boolean('leet')->nullable();
            $table->boolean('farming_background')->nullable();
            $table->boolean('ruralarea')->nullable();
            $table->boolean('hostler')->nullable();
            $table->boolean('disability')->nullable();
            $table->bigInteger('aadhar')->nullable();
            $table->date('dob')->nullable();
            $table->foreign('user_id')
            ->references('id')->on('users')
            ->onDelete('cascade')
            ->onUpdate('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('step_two');
    }
}
