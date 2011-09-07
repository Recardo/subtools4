class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(params[:user])  
    if @user.save
      redirect_to root_url, :notice => "Erfolgreich registriert"
    else
      render "new"
    end
  end          
  
  def show
    @user = User.find(:first)
    
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @user } 
      format.json { render :xml => @user}
    end
  end
  
end
