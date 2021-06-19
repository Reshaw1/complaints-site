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
    public class ClaimTypeController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Claim_Type.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Claim_Type.Select());
            }


        }
    }
}
