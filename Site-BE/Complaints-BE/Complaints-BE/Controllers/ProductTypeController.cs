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
    public class ProductTypeController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Product_Type.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Product_Type.Select());
            }

        }

        [HttpPost("create")]
        public IActionResult create(Product_Type producttype)
        {
            Product_Type.Insert(producttype.cols, producttype.values());
            return Ok
                (
                    @$"PRODUCT_TYPE_ID: {Product_Type.SelectMax(producttype.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Product_Type producttype)
        {
            Product_Type.Update(producttype.changes(), producttype.IDCol, producttype.ID.Value);
            return Ok("Product Type Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Product_Type producttype = new Product_Type();
            Product_Type.Delete(id, producttype.IDCol);
            return Ok("Product Type Deleted");
        }
    }
}
