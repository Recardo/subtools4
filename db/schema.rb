# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110927144327) do

  create_table "addresses", :force => true do |t|
    t.string   "name"
    t.string   "firstname"
    t.string   "street1"
    t.string   "street2"
    t.string   "postalcode"
    t.string   "city"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "company_id"
  end

  create_table "agents", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "company_id"
  end

  create_table "categories", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "companies", :force => true do |t|
    t.string   "name"
    t.string   "vatregno"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "profils", :force => true do |t|
    t.string   "name"
    t.boolean  "active",                                     :default => true
    t.decimal  "wage",        :precision => 10, :scale => 2
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "agent_id"
    t.integer  "category_id"
  end

  create_table "request_positions", :force => true do |t|
    t.integer  "status"
    t.integer  "profil_id"
    t.decimal  "cost"
    t.decimal  "amount"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "request_id"
  end

  create_table "requests", :force => true do |t|
    t.integer  "user_id"
    t.integer  "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "auth_token"
    t.string   "password_reset_token"
    t.datetime "password_reset_sent_at"
    t.integer  "company_id"
  end

end
