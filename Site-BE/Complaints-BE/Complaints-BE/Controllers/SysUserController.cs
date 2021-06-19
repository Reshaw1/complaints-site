using Complaints_BE.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Complaints_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SysUserController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {   
            if(Sys_User.Select().Count.Equals(0))
            {
                return Ok("Empty");
            } else
            {
                return Ok(Sys_User.Select());
            }
            

        }

        [HttpPost("create")]
        public IActionResult create(Sys_User user)
        {
            Person.Insert(user.person.cols, user.person.values());
            user.person.ID = Person.SelectMax(user.person.IDCol);
            Sys_User.Insert(user.cols, user.values());
            return Ok
                (
                    @$"Sys_User_ID: {Sys_User.SelectMax(user.IDCol)}"
                );
        }

        //[HttpPut("update")]
        //public IActionResult update(Sys_User user)
        //{

        //}
    }
}
