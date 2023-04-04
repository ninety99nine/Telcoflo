<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUssdAccountConnectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ussd_account_connections', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('ussd_account_id')->index();
            $table->unsignedInteger('project_id')->nullable();
            $table->unsignedInteger('app_id')->nullable();
            $table->unsignedInteger('version_id')->nullable()->index();

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
        Schema::dropIfExists('ussd_account_connections');
    }
}
