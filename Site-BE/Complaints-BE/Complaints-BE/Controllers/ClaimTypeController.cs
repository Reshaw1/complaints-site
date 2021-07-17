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

        [HttpPost("create")]
        public IActionResult create(Claim_Type claimtype)
        {
            Claim_Type.Insert(claimtype.cols, claimtype.values());
            return Ok
                (
                    @$"CLAIM_TYPE_ID: {Claim_Type.SelectMax(claimtype.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Claim_Type claimtype)
        {
            Claim_Type.Update(claimtype.changes(), claimtype.IDCol, claimtype.ID.Value);
            return Ok("Claim Type Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Claim_Type claimtype = new Claim_Type();
            Claim_Type.Delete(id, claimtype.IDCol);
            return Ok("Claim Type Deleted");
        }
    }
}
