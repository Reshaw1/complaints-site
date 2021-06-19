﻿using Complaints_BE.Models;
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
    public class DepartmentController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Department.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Department.Select());
            }
        }
    }
}