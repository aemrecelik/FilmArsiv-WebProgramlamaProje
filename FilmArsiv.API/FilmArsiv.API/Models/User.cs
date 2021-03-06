﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmArsiv.API.Models
{
    public class User
    {
        public User()
        {
            Movies = new List<Movie>();
        }
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public List<Movie> Movies { get; set; }
    }
}
