import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="font-display text-2xl font-bold">
            5 Стихий
          </div>
          <div className="space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Программа
            </Button>
            <Button variant="secondary">
              Написать мне
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
            Ты давно уже не начинающий.<br />
            Ты многое создал.<br />
            <span className="text-accent">Но внутри — пустота.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Я помогаю руководителям и предпринимателям вернуть силу, ясность и внутренний огонь.
            Через глубинную работу: коучинг, расстановки, медитации и работу с родом.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать мне
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Icon name="Calendar" size={20} className="mr-2" />
              Выбрать время
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-r from-primary/50 to-primary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Ты чувствуешь это?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                {[
                  "Успех есть, а радости нет",
                  "Давно живёшь из долга, а не из желания",
                  "Не можешь принять важные решения"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 text-left">
                    <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {[
                  "Потерял вкус к жизни, семье, работе",
                  "Хотел бы двигаться дальше, но не видишь куда"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 text-left">
                    <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-xl leading-relaxed">
                Это нормально. Это начало.<br />
                <span className="text-accent font-semibold">Именно с этого момента можно начать новый этап.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              После программы ты снова почувствуешь себя<br />
              <span className="text-accent">лидером — внутри и вне</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {[
                { icon: "Zap", title: "Восстановишь внутреннюю силу" },
                { icon: "Target", title: "Найдёшь новые точки роста" },
                { icon: "Eye", title: "Примишь важные решения из ясности" },
                { icon: "Flame", title: "Включишь харизму и вдохновение" },
                { icon: "Circle", title: "Создашь пространство силы внутри и вокруг" }
              ].map((benefit, index) => (
                <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="space-y-4 text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                      <Icon name={benefit.icon} size={32} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Format */}
      <section className="py-20 bg-gradient-to-r from-primary/30 to-primary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              5 стихий. 5 трансформаций
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Моя программа — не тренинг. Это <span className="text-accent font-semibold">личное погружение в тебя самого</span>, 
              через работу с разными уровнями:
            </p>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/img/d0dd298b-e6db-4589-ac3a-6a6c26c7df36.jpg" 
                  alt="5 стихий" 
                  className="w-96 h-96 object-cover opacity-20 rounded-full"
                />
              </div>
              
              <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {[
                  { element: "Вода", description: "осознание и отпускание тревог", icon: "Waves" },
                  { element: "Земля", description: "поиск опор и точек роста", icon: "Mountain" },
                  { element: "Воздух", description: "стратегия и принятие решений", icon: "Wind" },
                  { element: "Огонь", description: "харизма и смелость действий", icon: "Flame" },
                  { element: "Эфир", description: "создание пространства силы внутри и вокруг", icon: "Sparkles" }
                ].map((element, index) => (
                  <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105 transition-all duration-300">
                    <div className="space-y-4 text-center">
                      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                        <Icon name={element.icon} size={40} className="text-accent" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-accent">{element.element}</h3>
                      <p className="text-white/90">{element.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-lg">
                Каждый день — не просто сессия, а работа с твоим полем, твоими причинами застоя.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Как участвовать
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Полный путь",
                  subtitle: "(5 дней)",
                  price: "200 000 ₽",
                  description: "Можно пройти подряд или в удобные для тебя дни",
                  featured: true
                },
                {
                  title: "Один день",
                  price: "50 000 ₽",
                  description: "Выбери тот день, который особенно нужен тебе"
                },
                {
                  title: "Индивидуальная сессия",
                  price: "от 15 000 ₽",
                  description: "Для тех, кто пока не готов на весь путь"
                }
              ].map((plan, index) => (
                <Card key={index} className={`p-8 border-2 transition-all duration-300 ${
                  plan.featured 
                    ? "bg-accent/20 border-accent scale-105" 
                    : "bg-white/10 border-white/20 hover:border-accent/50"
                }`}>
                  <div className="space-y-6 text-center">
                    <div>
                      <h3 className="font-display text-2xl font-bold">{plan.title}</h3>
                      {plan.subtitle && <p className="text-accent">{plan.subtitle}</p>}
                    </div>
                    <div className="font-display text-3xl font-bold text-accent">
                      {plan.price}
                    </div>
                    <p className="text-white/90">{plan.description}</p>
                    <Button 
                      className={`w-full ${
                        plan.featured 
                          ? "bg-secondary hover:bg-secondary/90" 
                          : "bg-white/20 hover:bg-white/30"
                      }`}
                    >
                      Выбрать
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-xl font-semibold">
                Я не торгуюсь.<br />
                Потому что знаю цену того, что меняется внутри.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-primary/50 to-primary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
              <Icon name="Quote" size={48} className="text-accent mx-auto mb-8" />
              <blockquote className="font-display text-2xl md:text-3xl font-bold mb-8">
                "Год назад я заплатил ей 50 тысяч. Сегодня она стоит 150, но точно того стоит"
              </blockquote>
              <p className="text-white/80 italic">
                — клиент, который благодаря работе со мной вышел на новый уровень уверенности, 
                увеличил доход и полностью перестроил образ жизни
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center">
              Я не просто коуч
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Я психолог, коуч, специалист по работе с родом, уверенной подачей и смыслами.
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-semibold text-accent">Работаю с теми, кто:</h3>
                  <ul className="space-y-3">
                    {[
                      "Потерял интерес к жизни",
                      "Застрял в рутине",
                      "Чувствует выгорание",
                      "Хочет больше, чем успех — хочет гармонию"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4 pt-6">
                  <p className="text-lg font-semibold">Я не даю советов.</p>
                  <p className="text-lg font-semibold text-accent">Я помогаю услышать себя.</p>
                  <p className="text-white/90">
                    Через глубинную работу, медитации, расстановки и индивидуальные сессии.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-2xl overflow-hidden">
                  <img 
                    src="/img/573f35a7-5628-4df8-85c1-81e95f24a9e0.jpg" 
                    alt="Духовная трансформация" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/30 to-primary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Если ты чувствуешь, что пора начать новый этап — напиши мне
            </h2>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-xl">
                Не нужно ждать идеального момента.<br />
                <span className="text-accent font-semibold">Идеальный момент — когда ты готов начать.</span>
              </p>
              
              <p className="text-lg">
                Напиши мне: <span className="text-accent font-semibold">[Имя] + хочу начать</span>
              </p>
              
              <p className="text-white/80">Или нажми кнопку ниже.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать мне
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Icon name="Calendar" size={20} className="mr-2" />
                Выбрать время
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="font-display text-2xl font-bold">
              5 Стихий
            </div>
            
            <p className="text-lg max-w-2xl mx-auto">
              Я не продаю. Я открываю доступ к пространству, где происходит трансформация.
              Это не про деньги. Это про то, чтобы ты снова стал источником энергии для себя и тех, кто рядом.
            </p>
            
            <p className="text-accent font-semibold">
              Если ты чувствуешь, что пора начать — напиши мне. Я покажу тебе, как.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;