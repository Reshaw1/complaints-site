using Complaints_BE.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComplainController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Complain.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Complain.Select());
            }


        }
    }
}
