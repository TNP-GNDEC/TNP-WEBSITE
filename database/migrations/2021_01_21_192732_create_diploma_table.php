<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiplomaTable extends Migration
{
    /**
     * board:"",
        
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diploma', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned()->default(0);
            $table->bigInteger('urn')->unsigned()->unique()->default(0);
            $table->bigInteger('crn')->unsigned()->default(0);
            $table->string('institution_name')->nullable();
            //$table->string('marks_type')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('branch')->nullable();
            $table->year('year_of_passing')->nullable();
            $table->bigInteger('year_gap')->nullable();
            $table->bigInteger('pincode')->nullable();
            $table->string('obtained_marks')->nullable();
            $table->string('maximum_marks')->nullable();
            $table->string('file')->nullable();
            // $table->foreign('user_id')
            // ->references('id')->on('users')
            // ->onDelete('cascade')
            // ->onUpdate('cascade');

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
        Schema::dropIfExists('diploma');
    }
}
