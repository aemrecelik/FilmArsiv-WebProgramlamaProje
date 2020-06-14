using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FilmArsiv.API.Data;
using FilmArsiv.API.Dtos;
using FilmArsiv.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace FilmArsiv.API.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private IAppRepository _appRepository;
        private IMapper _mapper;

        public MoviesController(IAppRepository appRepository, IMapper mapper)
        {
            _appRepository = appRepository;
            _mapper = mapper;
        }

        public ActionResult GetMovies()
        {
            var movies = _appRepository.GetMovies();
            var moviesToReturn = _mapper.Map<List<MovieForListDto>>(movies); 
            return Ok(moviesToReturn);
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]Movie movie)
        {
            _appRepository.Add(movie);
            _appRepository.SaveAll();
            return Ok(movie);
        }


        [HttpGet]
        [Route("detail")]
        public ActionResult GetMovieById(int id)
        {
            var movie = _appRepository.GetMovieById(id);
            var movieToReturn = _mapper.Map<MovieForDto>(movie);
            return Ok(movieToReturn);
        }

        [HttpGet]
        [Route("photos")]
        public ActionResult GetPhotosByMovie(int movieId)
        {
            var photos = _appRepository.GetPhotosByMovie(movieId);
            return Ok(photos);
        }









    }
}
