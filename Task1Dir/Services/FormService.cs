using System.Text.Json;
using Task1Dir.DTO;

namespace Task1Dir.Services
{
    public class FormService
    {
        public StartFormDto GetForm(string name)
        {
            StartFormDto form = new StartFormDto();
            var data = File.ReadAllText($"Forms/{name}.json");
            form = JsonSerializer.Deserialize<StartFormDto>(data, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
            return form;
        }
    }
}
