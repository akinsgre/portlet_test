class PortletsController < ApplicationController
  def index
    @portlets = Portlet.find(:all)
    respond_to do |format|
      format.html
      format.json { render :json => @portlets }
    end
  end

end
