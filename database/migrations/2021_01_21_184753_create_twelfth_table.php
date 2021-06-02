<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTwelfthTable extends Migration
{
    /**
     * Run the migrations.
     * board: "",
            
     * @return void
     */
    public function up()
    {
        Schema::create('twelfth', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned()->default(0);
            $table->bigInteger('urn')->unsigned()->unique()->default(0);
            $table->bigInteger('crn')->unsigned()->default(0);
            $table->string('institution_name')->nullable();
            $table->string('jee_rank')->nullable();
            //$table->string('marks_type')->nullable();
            $table->string('obtained_marks')->nullable();
            $table->string('board')->nullable();
            $table->string('maximum_marks')->nullable();
            $table->string('percentage')->nullable();
            $table->string('file')->nullable();
            $table->bigInteger('pincode')->nullable();
            $table->year('year_of_passing')->nullable();
            $table->bigInteger('year_gap')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
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
        Schema::dropIfExists('twelfth');
    }
}
