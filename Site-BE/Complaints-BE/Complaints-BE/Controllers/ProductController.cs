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
    public class ProductController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Product.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Product.Select());
            }


        }

        [HttpPost("create")]
        public IActionResult create(Product product)
        {
            Product.Insert(product.cols, product.values());
            return Ok
                (
                    @$"PRODUCT_ID: {Product.SelectMax(product.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Product product)
        {
            Product.Update(product.changes(), product.IDCol, product.ID.Value);
            return Ok("Product Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Product product = new Product();
            Product.Delete(id, product.IDCol);
            return Ok("Product Deleted");
        }
    }
}
