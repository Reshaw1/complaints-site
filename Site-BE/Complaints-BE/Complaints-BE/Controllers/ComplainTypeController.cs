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
    public class ComplainTypeController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Complain_Type.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Complain_Type.Select());
            }

        }

        [HttpPost("create")]
        public IActionResult create(Complain_Type complaintype)
        {
            Complain_Type.Insert(complaintype.cols, complaintype.values());
            return Ok
                (
                    @$"COMPLAIN_TYPE_ID: {Complain_Type.SelectMax(complaintype.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Complain_Type complaintype)
        {
            Complain_Type.Update(complaintype.changes(), complaintype.IDCol, complaintype.ID.Value);
            return Ok("Complain Type Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Complain_Type complaintype = new Complain_Type();
            Complain_Type.Delete(id, complaintype.IDCol);
            return Ok("Complain Type Deleted");
        }
    }
}
