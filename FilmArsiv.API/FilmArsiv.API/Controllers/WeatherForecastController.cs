using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmArsiv.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace FilmArsiv.API.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private DataContext _context;
        public WeatherForecastController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetValues()
        {
            var values =await _context.Values.ToListAsync();
            return Ok(values);
        }
        public async Task<ActionResult> GetValue(int id)
        {
            var value = await _context.Values.FirstOrDefaultAsync(v=> v.Id == id);
            return Ok(value);
        }

    }
}
