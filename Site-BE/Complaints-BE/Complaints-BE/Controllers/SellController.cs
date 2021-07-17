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
    public class SellController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Sell.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Sell.Select());
            }


        }

        [HttpPost("create")]
        public IActionResult create(Sell sell)
        {
            Sell.Insert(sell.cols, sell.values());
            return Ok
                (
                    @$"SELL_ID: {Sell.SelectMax(sell.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Sell sell)
        {
            Sell.Update(sell.changes(), sell.IDCol, sell.ID.Value);
            return Ok("Sell Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Sell sell = new Sell();
            Sell.Delete(id, sell.IDCol);
            return Ok("Sell Deleted");
        }
    }
}
