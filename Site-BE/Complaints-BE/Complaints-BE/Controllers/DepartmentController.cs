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
    public class DepartmentController : ControllerBase
    {
        [HttpGet("get")]
        public IActionResult get()
        {
            if (Department.Select().Count.Equals(0))
            {
                return Ok("Empty");
            }
            else
            {
                return Ok(Department.Select());
            }
        }

        [HttpPost("create")]
        public IActionResult create(Department department)
        {
            Department.Insert(department.cols, department.values());
            return Ok
                (
                    @$"DEPARTMENT_ID: {Department.SelectMax(department.IDCol)}"
                );
        }

        [HttpPut("update")]
        public IActionResult update(Department department)
        {
            Department.Update(department.changes(), department.IDCol, department.ID.Value);
            return Ok("Department Modified");
        }

        [HttpDelete("delete/{id:int}")]
        public IActionResult delete(int id)
        {
            Department department = new Department();
            Department.Delete(id, department.IDCol);
            return Ok("Department Deleted");
        }
    }
}
