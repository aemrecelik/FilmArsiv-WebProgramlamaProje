using FilmArsiv.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmArsiv.API.Data
{
    public class AppRepository : IAppRepository
    {
        private DataContext _context;

        public AppRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public List<Movie> GetMovies()
        {
            var movies = _context.Movies.Include(c => c.Photos).ToList();
            return movies;
        }

        public Movie GetMovieById(int movieId)
        {
            var movie = _context.Movies.Include(c => c.Photos).FirstOrDefault(c => c.Id == movieId);
            return movie;
        }

        public Photo GetPhoto(int id)
        {
            var photo = _context.Photos.FirstOrDefault(p => p.Id == id);
            return photo;
        }

        public List<Photo> GetPhotosByMovie(int movieId)
        {
            var photos = _context.Photos.Where(p => p.MovieId == movieId).ToList();
            return photos;
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
