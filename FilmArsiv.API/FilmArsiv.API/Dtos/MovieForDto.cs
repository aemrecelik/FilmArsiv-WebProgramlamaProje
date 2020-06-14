using FilmArsiv.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmArsiv.API.Dtos
{
    public class MovieForDto
    { 
            public int Id { get; set; }
            public string Name { get; set; }        
            public string Description { get; set; }


        
        public List<Photo> Photos { get; set; }

    }
}
