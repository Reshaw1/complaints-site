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
    public class ResponseController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Models.Response.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Models.Response.Select());
            }
        }

        [HttpPost("create")]
        public IActionResult create(Models.Response response)
        {
            Models.Response.Insert(response.cols, response.values());
            return Ok
                (
                    @$"RESPONSE_ID: {Models.Response.SelectMax(response.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Models.Response response)
        {
            Models.Response.Update(response.changes(), response.IDCol, response.ID.Value);
            return Ok("Response Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Models.Response response = new Models.Response();
            Models.Response.Delete(id, response.IDCol);
            return Ok("Response Deleted");
        }
    }
}
