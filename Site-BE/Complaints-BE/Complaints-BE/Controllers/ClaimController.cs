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
    public class ClaimController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Claim.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Claim.Select());
            }


        }

        [HttpPost("create")]
        public IActionResult create(Claim claim)
        {
            Complain.Insert(claim.cols, claim.values());
            return Ok
                (
                    @$"CLAIM_ID: {Claim.SelectMax(claim.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Claim claim)
        {
            Claim.Update(claim.changes(), claim.IDCol, claim.ID.Value);
            return Ok("Claim Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Claim claim = new Claim();
            Claim.Delete(id, claim.IDCol);
            return Ok("Claim Deleted");
        }
    }
}
