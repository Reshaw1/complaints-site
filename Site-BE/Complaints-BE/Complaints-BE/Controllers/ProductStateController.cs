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
    public class ProductStateController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Product_State.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Product_State.Select());
            }

        }

        [HttpPost("create")]
        public IActionResult create(Product_State productstate)
        {
            Product_State.Insert(productstate.cols, productstate.values());
            return Ok
                (
                    @$"PRODUCT_STATE_ID: {Product_State.SelectMax(productstate.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Product_State productstate)
        {
            Product_State.Update(productstate.changes(), productstate.IDCol, productstate.ID.Value);
            return Ok("Product State Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Product_State productstate = new Product_State();
            Product_State.Delete(id, productstate.IDCol);
            return Ok("Product State Deleted");
        }
    }
}
