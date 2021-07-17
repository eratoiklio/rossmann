import {Placeholders} from '@/types/placeholders'
import Article from '@/types/ArticleType'
import BoxType from '@/types/BoxType'
export const PL = (expr: Placeholders | Article | BoxType | 'noItem' | 'noBox', param=""): string => {
    let pl = ""; 
    switch(expr){
        case 'article_code': pl ="Kod artykułu"; break;
        case 'container_code': pl ="Kod kontenera"; break;
        case 'search': pl = "Szukaj"; break;
        case 'name': pl = "Nazwa"; break;
        case 'code': pl = "Kod artykułu"; break;
        case 'price': pl = "Cena"; break;
        case 'stock': pl = "Stok"; break;
        case 'BoxCode': pl = "Kod kontenera"; break;
        case 'Width': pl = "Szerokość"; break;
        case 'Height': pl = "Wysokość"; break;
        case 'Depth': pl = "Głębokość"; break;
        case 'noItem': pl = `Artykuł o kodzie ${param} nie istnieje`; break;
        case 'noBox': pl = `Pojemnika o kodzie ${param} nie istnieje lub jest nieaktywny`; break;
        default: console.log("Translation  not found");
        }
    return pl;
}