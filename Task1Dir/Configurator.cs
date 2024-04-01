using System.Runtime.CompilerServices;
using Task1Dir.Services;

namespace Task1Dir
{
    public static class Configurator
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddScoped<FormService>();
        }
    }
}
