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

        [HttpPost("create")]
        public IActionResult create(Complain complain)
        {
            Complain.Insert(complain.cols, complain.values());
            return Ok
                (
                    @$"COMPLAIN_ID: {Complain.SelectMax(complain.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Complain complain)
        {
            Complain.Update(complain.changes(), complain.IDCol, complain.ID.Value);
            return Ok("Complain Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Complain complain = new Complain();
            Complain.Delete(id, complain.IDCol);
            return Ok("Complain Deleted");
        }
    }
}
