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
    public class ComplainStateController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Complain_State.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Complain_State.Select());
            }

        }

        [HttpPost("create")]
        public IActionResult create(Complain_State complainstate)
        {
            Complain_State.Insert(complainstate.cols, complainstate.values());
            return Ok
                (
                    @$"COMPLAIN_STATE_ID: {Complain_State.SelectMax(complainstate.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Complain_State complainstate)
        {
            Complain_State.Update(complainstate.changes(), complainstate.IDCol, complainstate.ID.Value);
            return Ok("Complain State Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Complain_State complainstate = new Complain_State();
            Complain_State.Delete(id, complainstate.IDCol);
            return Ok("Complain State Deleted");
        }
    }
}
