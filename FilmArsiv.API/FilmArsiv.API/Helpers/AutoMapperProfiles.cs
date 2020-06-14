using AutoMapper;
using FilmArsiv.API.Dtos;
using FilmArsiv.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmArsiv.API.Helpers
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Movie, MovieForListDto>()
                .ForMember(dest=> dest.PhotoUrl,opt=>
                {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                });

            CreateMap<Movie, MovieForDto>();
            CreateMap<Photo, PhotoForCreationDto>();
            CreateMap<PhotoForReturnDto, Photo>();

        }
    }
}
