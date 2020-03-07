import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTableIfNotExists('users', tb => {
    tb.increments('user_id').primary();

    tb.string('username').index();
    tb.string('password').index();
    tb.timestamp('created_on');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('users');
}
