class Admin::RequestsController < ApplicationController
  def index
  end

  def show
    @id = params[:id] 
    #puts @id
  end

end
