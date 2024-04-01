using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;
using Task1Dir.DTO;
using Task1Dir.Services;

namespace Task1Dir.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly FormService _formService;

        public FormController(FormService formService) {
            _formService = formService;
        }

        [HttpGet]
        [Route("GetSignature")]
        public StartFormDto GetSignature([FromQuery]string formName)
        {
            var form = _formService.GetForm(formName);
            return form;
        }
    }
}
