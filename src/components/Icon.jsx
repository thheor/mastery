import * as Outline from "@heroicons/react/24/outline";
import * as Solid from "@heroicons/react/24/solid";

export function Icon({name, type = "outline", className = "size-6"}){
  const icon = type === "outline" ? Outline : Solid;
  const IconComponent = icon[name];
  
  return(
    <IconComponent className={className} />
  );
}
