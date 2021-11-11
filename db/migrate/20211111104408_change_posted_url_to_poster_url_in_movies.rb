class ChangePostedUrlToPosterUrlInMovies < ActiveRecord::Migration[6.0]
  def change
    remove_column :movies, :posted_url, :string
    add_column :movies, :poster_url, :string
  end
end
