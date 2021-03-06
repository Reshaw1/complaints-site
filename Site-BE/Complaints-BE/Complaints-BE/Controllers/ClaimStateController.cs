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
    public class ClaimStateController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Claim_State.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Claim_State.Select());
            }

        }

        [HttpPost("create")]
        public IActionResult create(Claim_State claimstate)
        {
            Claim_State.Insert(claimstate.cols, claimstate.values());
            return Ok
                (
                    @$"CLAIM_STATE_ID: {Claim_State.SelectMax(claimstate.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Claim_State claimstate)
        {
            Claim_State.Update(claimstate.changes(), claimstate.IDCol, claimstate.ID.Value);
            return Ok("Claim State Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Claim_State claimstate = new Claim_State();
            Claim_State.Delete(id, claimstate.IDCol);
            return Ok("Claim State Deleted");
        }
    }
}
