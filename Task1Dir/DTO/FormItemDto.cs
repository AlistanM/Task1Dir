namespace Task1Dir.DTO
{
    public class FormItemDto
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }
        public string PlaceHolder { get; set; }
        public bool? Required { get; set; }
        public Dictionary<string, string> ValidationRules { get; set; }
        public string Value { get; set; }
        public string Label { get; set; }
        public string Class { get; set; }
        public bool? Disabled { get; set; }
        public bool? Checked { get; set; }
        public List<FormItemsDto> Items { get; set; }
        public List<FormOptionsDto> Options { get; set; }
    }
}
