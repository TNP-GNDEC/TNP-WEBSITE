<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStepTwoTable extends Migration
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        Schema::create('step_two', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('pincode');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('height');
            $table->string('weight');
            $table->string('gender');
            $table->string('address');
            $table->string('city');
            $table->string('state');
            $table->string('district');
            $table->bigInteger('mobile');
            $table->bigInteger('whatsapp');
            $table->string('father_name');
            $table->bigInteger('father_mobile');
            $table->string('mother_name');
            $table->string('stream');
            $table->string('blood_group');
            $table->string('branch_type');
            $table->string('category');
            $table->string('marital_status');
            $table->string('training_sem');
            $table->string('shift');
            $table->boolean('leet');
            $table->boolean('farming_background');
            $table->boolean('hostler');
            $table->boolean('disability');
            $table->bigInteger('mother_mobile');
            $table->bigInteger('adhaar');
            $table->date('dob');

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
