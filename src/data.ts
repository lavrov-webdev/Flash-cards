import { cardType } from './types';
let test = document.createElement('div');
  test.innerHTML = `
  <div class="things clearfix" data-column-a="1" data-column-b="2">
	<div class="things-header things-row">
		<a
			class="ignore-show button mini"
			title=""
			data-placement="right"
			data-original-title="Change whether words appear in learning sessions"
			><i class="ico ico-settings"></i>
			пропустить </a
		><i class="ico ico-seed ico-purple"></i> Готово к изучению
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i class="ico ico-water ico-blue"></i> Готово
		к повторению
	</div>
	<div class="ignore-ui things-row clearfix">
		<h2>Пропустить слова</h2>
		<p>
			Отметь поля, чтобы пропустить/не пропускать слова, затем нажми "сохранить"
			внизу. Пропущенные слова не будут появляться в учебных занятиях.
		</p>
		<p class="align-right">
			<a href="#" class="ignore-all btn btn-small"> Все </a
			><a href="#" class="ignore-none btn btn-small"> None </a>
		</p>
	</div>
	<div class="ignore-ui things-row" style="text-align: right">
		<strong>Пропустить?</strong>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521023234"
		data-thing-id="311363541"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">I</div></div>
		<div class="col_b col text"><div class="text">я</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521088770"
		data-thing-id="311363542"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">drink; drank; drunk</div>
		</div>
		<div class="col_b col text">
			<div class="text">пить, выпить (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521154306"
		data-thing-id="311363543"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">coffee</div></div>
		<div class="col_b col text"><div class="text">кофе</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521219842"
		data-thing-id="311363544"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">in</div></div>
		<div class="col_b col text"><div class="text">в (внутри)</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521285378"
		data-thing-id="311363545"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">morning</div></div>
		<div class="col_b col text"><div class="text">утро</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521350914"
		data-thing-id="311363546"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">drink coffee</div></div>
		<div class="col_b col text"><div class="text">пить кофе</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521416450"
		data-thing-id="311363547"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">in the morning</div></div>
		<div class="col_b col text"><div class="text">утром, по утрам</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521481986"
		data-thing-id="311363548"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">she</div></div>
		<div class="col_b col text"><div class="text">она</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521547522"
		data-thing-id="311363549"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">listen</div></div>
		<div class="col_b col text"><div class="text">слушать</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521613058"
		data-thing-id="311363550"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">music</div></div>
		<div class="col_b col text"><div class="text">музыка</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521678594"
		data-thing-id="311363551"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">every</div></div>
		<div class="col_b col text"><div class="text">каждый</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521744130"
		data-thing-id="311363552"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">day</div></div>
		<div class="col_b col text"><div class="text">день</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521875202"
		data-thing-id="311363554"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">listen to music</div></div>
		<div class="col_b col text"><div class="text">слушать музыку</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405521940738"
		data-thing-id="311363555"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">every day</div></div>
		<div class="col_b col text"><div class="text">каждый день</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522006274"
		data-thing-id="311363556"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">woman</div></div>
		<div class="col_b col text"><div class="text">женщина</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522071810"
		data-thing-id="311363557"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">go; went; gone</div></div>
		<div class="col_b col text">
			<div class="text">идти, ехать (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522137346"
		data-thing-id="311363558"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">shop</div></div>
		<div class="col_b col text"><div class="text">магазин</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522202882"
		data-thing-id="311363559"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">go shopping</div></div>
		<div class="col_b col text">
			<div class="text">ходить за покупками</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522268418"
		data-thing-id="311363560"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">you</div></div>
		<div class="col_b col text"><div class="text">ты, вы, Вы</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522333954"
		data-thing-id="311363561"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">like</div></div>
		<div class="col_b col text"><div class="text">нравиться, любить</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522399490"
		data-thing-id="311363562"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">computer</div></div>
		<div class="col_b col text"><div class="text">компьютер</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522465026"
		data-thing-id="311363563"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">game</div></div>
		<div class="col_b col text"><div class="text">игра</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522530562"
		data-thing-id="311363564"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">computer games</div></div>
		<div class="col_b col text"><div class="text">компьютерные игры</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522596098"
		data-thing-id="311363565"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">he</div></div>
		<div class="col_b col text"><div class="text">он</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522661634"
		data-thing-id="311363566"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">work</div></div>
		<div class="col_b col text"><div class="text">работать</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522727170"
		data-thing-id="311363567"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">bank</div></div>
		<div class="col_b col text"><div class="text">банк</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522792706"
		data-thing-id="311363568"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">work in the police</div></div>
		<div class="col_b col text"><div class="text">работать в полиции</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522858242"
		data-thing-id="311363569"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">leaf</div></div>
		<div class="col_b col text"><div class="text">лист (дерева)</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522923778"
		data-thing-id="311363570"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">fall; fell; fallen</div></div>
		<div class="col_b col text">
			<div class="text">падать (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405522989314"
		data-thing-id="311363571"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">from</div></div>
		<div class="col_b col text"><div class="text">из, от</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523054850"
		data-thing-id="311363572"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">tree</div></div>
		<div class="col_b col text"><div class="text">дерево</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523120386"
		data-thing-id="311363573"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">fall from trees</div></div>
		<div class="col_b col text"><div class="text">падать с деревьев</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523185922"
		data-thing-id="311363574"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">we</div></div>
		<div class="col_b col text"><div class="text">мы</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523251458"
		data-thing-id="311363575"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">always</div></div>
		<div class="col_b col text"><div class="text">всегда</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523316994"
		data-thing-id="311363576"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">do; did; done</div></div>
		<div class="col_b col text">
			<div class="text">делать (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523382530"
		data-thing-id="311363577"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">our</div></div>
		<div class="col_b col text"><div class="text">наш</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523448066"
		data-thing-id="311363578"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">homework</div></div>
		<div class="col_b col text">
			<div class="text">домашняя работа, домашнее задание</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523513602"
		data-thing-id="311363579"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">do homework</div></div>
		<div class="col_b col text">
			<div class="text">делать домашнюю работу</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523579138"
		data-thing-id="311363580"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">mouse</div></div>
		<div class="col_b col text"><div class="text">мышь</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523644674"
		data-thing-id="311363581"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">hide; hid; hidden</div></div>
		<div class="col_b col text">
			<div class="text">прятать(ся) (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523710210"
		data-thing-id="311363582"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">hole</div></div>
		<div class="col_b col text"><div class="text">дыра, нора</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523775746"
		data-thing-id="311363583"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">hide in holes</div></div>
		<div class="col_b col text"><div class="text">прятаться в норах</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523841282"
		data-thing-id="311363584"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">they</div></div>
		<div class="col_b col text"><div class="text">они</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523906818"
		data-thing-id="311363585"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sell; sold; sold</div></div>
		<div class="col_b col text">
			<div class="text">продавать(ся) (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405523972354"
		data-thing-id="311363586"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">their</div></div>
		<div class="col_b col text"><div class="text">их</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524037890"
		data-thing-id="311363587"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">old</div></div>
		<div class="col_b col text"><div class="text">старый</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524103426"
		data-thing-id="311363588"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sofa</div></div>
		<div class="col_b col text"><div class="text">софа, диван</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524168962"
		data-thing-id="311363589"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sell a sofa</div></div>
		<div class="col_b col text"><div class="text">продавать диван</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524234498"
		data-thing-id="311363590"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">children</div></div>
		<div class="col_b col text"><div class="text">дети</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524300034"
		data-thing-id="311363591"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">school</div></div>
		<div class="col_b col text"><div class="text">школа</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524365570"
		data-thing-id="311363592"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">Monday</div></div>
		<div class="col_b col text"><div class="text">понедельник</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524431106"
		data-thing-id="311363593"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">go to work</div></div>
		<div class="col_b col text"><div class="text">идти на работу</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524496642"
		data-thing-id="311363594"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">on Fridays</div></div>
		<div class="col_b col text"><div class="text">по пятницам</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524562178"
		data-thing-id="311363595"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sometimes</div></div>
		<div class="col_b col text"><div class="text">иногда</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524627714"
		data-thing-id="311363596"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">feed; fed; fed</div></div>
		<div class="col_b col text">
			<div class="text">кормить (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405524693250"
		data-thing-id="311363597"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">deer</div></div>
		<div class="col_b col text"><div class="text">олень</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524758786"
		data-thing-id="311363598"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">feed deer</div></div>
		<div class="col_b col text"><div class="text">кормить оленей</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524824322"
		data-thing-id="311363599"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">man</div></div>
		<div class="col_b col text"><div class="text">мужчина, человек</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405524889858"
		data-thing-id="311363600"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">watch</div></div>
		<div class="col_b col text">
			<div class="text">смотреть (длительно)</div>
		</div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405524955394"
		data-thing-id="311363601"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">TV</div></div>
		<div class="col_b col text"><div class="text">телевизор</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525020930"
		data-thing-id="311363602"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">evening</div></div>
		<div class="col_b col text"><div class="text">вечер</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525086466"
		data-thing-id="311363603"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">watch movies on TV</div></div>
		<div class="col_b col text">
			<div class="text">смотреть фильмы по телевизору</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525152002"
		data-thing-id="311363604"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">in the evening</div></div>
		<div class="col_b col text">
			<div class="text">вечером, по вечерам</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525217538"
		data-thing-id="311363605"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">it</div></div>
		<div class="col_b col text">
			<div class="text">это, оно, она, он (про все, что не человек)</div>
		</div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405525283074"
		data-thing-id="311363606"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">rain</div></div>
		<div class="col_b col text"><div class="text">дождь, дождить</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525348610"
		data-thing-id="311363607"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">autumn</div></div>
		<div class="col_b col text"><div class="text">осень</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525414146"
		data-thing-id="311363608"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">it rains</div></div>
		<div class="col_b col text"><div class="text">идет дождь</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525479682"
		data-thing-id="311363609"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">in autumn</div></div>
		<div class="col_b col text"><div class="text">осенью</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525545218"
		data-thing-id="311363610"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">brush</div></div>
		<div class="col_b col text">
			<div class="text">чистить щеткой, причесывать</div>
		</div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405525610754"
		data-thing-id="311363611"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">my</div></div>
		<div class="col_b col text"><div class="text">мой</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525676290"
		data-thing-id="311363612"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">tooth</div></div>
		<div class="col_b col text"><div class="text">зуб</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525741826"
		data-thing-id="311363613"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">after</div></div>
		<div class="col_b col text"><div class="text">после</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525807362"
		data-thing-id="311363614"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">lunch</div></div>
		<div class="col_b col text"><div class="text">обед</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525872898"
		data-thing-id="311363615"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">after classes</div></div>
		<div class="col_b col text"><div class="text">после занятий</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405525938434"
		data-thing-id="311363616"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">brush my teeth</div></div>
		<div class="col_b col text"><div class="text">чистить мои зубы</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405526003970"
		data-thing-id="311363617"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">goose</div></div>
		<div class="col_b col text"><div class="text">гусь</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526069506"
		data-thing-id="311363618"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">and</div></div>
		<div class="col_b col text"><div class="text">и</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405526135042"
		data-thing-id="311363619"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sheep</div></div>
		<div class="col_b col text"><div class="text">овца</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405526200578"
		data-thing-id="311363620"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">live</div></div>
		<div class="col_b col text"><div class="text">жить</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526266114"
		data-thing-id="311363621"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">on</div></div>
		<div class="col_b col text"><div class="text">на</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20405526331650"
		data-thing-id="311363622"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">farm</div></div>
		<div class="col_b col text"><div class="text">ферма</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526397186"
		data-thing-id="311363623"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">men</div></div>
		<div class="col_b col text"><div class="text">мужчины</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526462722"
		data-thing-id="311363624"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">women</div></div>
		<div class="col_b col text"><div class="text">женщины</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526528258"
		data-thing-id="311363625"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">child</div></div>
		<div class="col_b col text"><div class="text">ребенок</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526593794"
		data-thing-id="311363626"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">person</div></div>
		<div class="col_b col text"><div class="text">человек</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526659330"
		data-thing-id="311363627"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">people</div></div>
		<div class="col_b col text"><div class="text">люди</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526724866"
		data-thing-id="311363628"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">geese</div></div>
		<div class="col_b col text"><div class="text">гуси</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526790402"
		data-thing-id="311363629"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">foot</div></div>
		<div class="col_b col text"><div class="text">нога (ступня)</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526855938"
		data-thing-id="311363630"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">feet</div></div>
		<div class="col_b col text"><div class="text">ноги (ступни)</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526921474"
		data-thing-id="311363631"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">teeth</div></div>
		<div class="col_b col text"><div class="text">зубы</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405526987010"
		data-thing-id="311363632"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">mice</div></div>
		<div class="col_b col text"><div class="text">мыши</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405527052546"
		data-thing-id="311363633"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">ox</div></div>
		<div class="col_b col text"><div class="text">бык</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405527118082"
		data-thing-id="311363634"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">oxen</div></div>
		<div class="col_b col text"><div class="text">быки</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405527183618"
		data-thing-id="311363635"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">fish</div></div>
		<div class="col_b col text"><div class="text">рыба, рыбы</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20405527249154"
		data-thing-id="311363636"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">fruit</div></div>
		<div class="col_b col text"><div class="text">фрукт, фрукты</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436685291778"
		data-thing-id="311839070"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">sportsman</div></div>
		<div class="col_b col text"><div class="text">спортсмен</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436685422850"
		data-thing-id="311839072"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">sport</div></div>
		<div class="col_b col text"><div class="text">спорт</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436685553922"
		data-thing-id="311839074"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">He does a lot of sports</div>
		</div>
		<div class="col_b col text">
			<div class="text">Он много занимается спортом</div>
		</div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436685750530"
		data-thing-id="311839077"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">play</div></div>
		<div class="col_b col text"><div class="text">играть</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436685881602"
		data-thing-id="311839079"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">football</div></div>
		<div class="col_b col text"><div class="text">футбол</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436686012674"
		data-thing-id="311839081"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">week</div></div>
		<div class="col_b col text"><div class="text">неделя</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436686209282"
		data-thing-id="311839084"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">run; ran; run</div></div>
		<div class="col_b col text">
			<div class="text">бегать (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436686340354"
		data-thing-id="311839086"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">play football</div></div>
		<div class="col_b col text"><div class="text">играть в футбол</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436686471426"
		data-thing-id="311839088"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">go running</div></div>
		<div class="col_b col text">
			<div class="text">бегать, заниматься бегом</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436686602498"
		data-thing-id="311839090"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">1 time every 3 months</div>
		</div>
		<div class="col_b col text"><div class="text">раз в 3 месяца</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436686733570"
		data-thing-id="311839092"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">weekend</div></div>
		<div class="col_b col text">
			<div class="text">выходные (конец недели)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436686930178"
		data-thing-id="311839095"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">golf</div></div>
		<div class="col_b col text"><div class="text">гольф</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436687061250"
		data-thing-id="311839097"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">at the weekend</div></div>
		<div class="col_b col text"><div class="text">в выходные</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436687192322"
		data-thing-id="311839099"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">also</div></div>
		<div class="col_b col text"><div class="text">тоже, также</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436687323394"
		data-thing-id="311839101"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">part</div></div>
		<div class="col_b col text"><div class="text">часть</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436687520002"
		data-thing-id="311839104"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">different</div></div>
		<div class="col_b col text"><div class="text">другой, не такой</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436687651074"
		data-thing-id="311839106"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">competition</div></div>
		<div class="col_b col text"><div class="text">соревнование</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436687782146"
		data-thing-id="311839108"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">trainer</div></div>
		<div class="col_b col text"><div class="text">тренер</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436687913218"
		data-thing-id="311839110"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">take part in</div></div>
		<div class="col_b col text">
			<div class="text">принимать участие в</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436688044290"
		data-thing-id="311839112"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">work as a trainer</div></div>
		<div class="col_b col text"><div class="text">работать тренером</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436688175362"
		data-thing-id="311839114"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">lead; led; led</div></div>
		<div class="col_b col text">
			<div class="text">вести (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436688306434"
		data-thing-id="311839116"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">healthy</div></div>
		<div class="col_b col text"><div class="text">здоровый</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436688503042"
		data-thing-id="311839119"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">lifestyle</div></div>
		<div class="col_b col text"><div class="text">образ жизни</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436688634114"
		data-thing-id="311839121"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">protein</div></div>
		<div class="col_b col text"><div class="text">протеин, белок</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436688699650"
		data-thing-id="311839122"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">diet</div></div>
		<div class="col_b col text"><div class="text">диета</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436688830722"
		data-thing-id="311839124"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">lead a healthy life style</div>
		</div>
		<div class="col_b col text">
			<div class="text">вести здоровый образ жизни</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436689027330"
		data-thing-id="311839127"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">keep to a protein diet</div>
		</div>
		<div class="col_b col text">
			<div class="text">придерживаться белковой диеты</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436689158402"
		data-thing-id="311839129"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sweet</div></div>
		<div class="col_b col text"><div class="text">сладкий</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436689355010"
		data-thing-id="311839132"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sweet tooth</div></div>
		<div class="col_b col text"><div class="text">сладкоежка</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436689420546"
		data-thing-id="311839133"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sweets</div></div>
		<div class="col_b col text"><div class="text">конфеты</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436689551618"
		data-thing-id="311839135"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">chocolate</div></div>
		<div class="col_b col text"><div class="text">шоколад</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436689682690"
		data-thing-id="311839137"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">caramel</div></div>
		<div class="col_b col text"><div class="text">карамель</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436689813762"
		data-thing-id="311839139"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">lollipop</div></div>
		<div class="col_b col text">
			<div class="text">леденец (на палочке)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436689944834"
		data-thing-id="311839141"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">all</div></div>
		<div class="col_b col text">
			<div class="text">весь, целый, вся, все</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436690075906"
		data-thing-id="311839143"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">kind</div></div>
		<div class="col_b col text"><div class="text">добрый, вид</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436690206978"
		data-thing-id="311839145"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">chocolate sweets</div></div>
		<div class="col_b col text"><div class="text">шоколадные конфеты</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436690338050"
		data-thing-id="311839147"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">all kinds of sweets</div>
		</div>
		<div class="col_b col text"><div class="text">все виды конфет</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436690534658"
		data-thing-id="311839150"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">buy; bought; bought</div>
		</div>
		<div class="col_b col text">
			<div class="text">покупать (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436690665730"
		data-thing-id="311839152"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">or</div></div>
		<div class="col_b col text"><div class="text">или</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436690862338"
		data-thing-id="311839155"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">market</div></div>
		<div class="col_b col text"><div class="text">рынок, базар</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436690993410"
		data-thing-id="311839157"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">pastry shop</div></div>
		<div class="col_b col text"><div class="text">кондитерская</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436691190018"
		data-thing-id="311839160"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">in the market</div></div>
		<div class="col_b col text"><div class="text">на рынке</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436691321090"
		data-thing-id="311839162"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">even</div></div>
		<div class="col_b col text"><div class="text">даже</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436691517698"
		data-thing-id="311839165"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">post</div></div>
		<div class="col_b col text">
			<div class="text">пост, публиковать пост</div>
		</div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436691648770"
		data-thing-id="311839167"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">photo</div></div>
		<div class="col_b col text"><div class="text">фотография</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436691714306"
		data-thing-id="311839168"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">favourite</div></div>
		<div class="col_b col text"><div class="text">любимый</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436691845378"
		data-thing-id="311839170"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">internet</div></div>
		<div class="col_b col text"><div class="text">интернет</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436691976450"
		data-thing-id="311839172"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">post photos</div></div>
		<div class="col_b col text">
			<div class="text">публиковать фотографии</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436692173058"
		data-thing-id="311839175"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">on the internet</div></div>
		<div class="col_b col text"><div class="text">в интернете</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436692238594"
		data-thing-id="311839176"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">pensioner</div></div>
		<div class="col_b col text"><div class="text">пенсионер</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436692435202"
		data-thing-id="311839179"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">often</div></div>
		<div class="col_b col text"><div class="text">часто</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436692566274"
		data-thing-id="311839181"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">relax</div></div>
		<div class="col_b col text">
			<div class="text">отдыхать, расслабляться</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436692631810"
		data-thing-id="311839182"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">country</div></div>
		<div class="col_b col text"><div class="text">страна</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436692697346"
		data-thing-id="311839183"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">house</div></div>
		<div class="col_b col text"><div class="text">дом</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436692762882"
		data-thing-id="311839184"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">I often relax</div></div>
		<div class="col_b col text"><div class="text">я часто отдыхаю</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436692828418"
		data-thing-id="311839185"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">country house</div></div>
		<div class="col_b col text">
			<div class="text">загородный дом, дача</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436692893954"
		data-thing-id="311839186"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">walk</div></div>
		<div class="col_b col text">
			<div class="text">гулять, ходить пешком, прогулка</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436692959490"
		data-thing-id="311839187"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">fresh</div></div>
		<div class="col_b col text"><div class="text">свежий</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693025026"
		data-thing-id="311839188"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">air</div></div>
		<div class="col_b col text"><div class="text">воздух</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693090562"
		data-thing-id="311839189"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">in the fresh air</div></div>
		<div class="col_b col text"><div class="text">на свежем воздухе</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693156098"
		data-thing-id="311839190"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">have; had; had</div></div>
		<div class="col_b col text">
			<div class="text">иметь (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693221634"
		data-thing-id="311839191"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">good</div></div>
		<div class="col_b col text"><div class="text">хороший</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436693287170"
		data-thing-id="311839192"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">night</div></div>
		<div class="col_b col text"><div class="text">ночь</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693352706"
		data-thing-id="311839193"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sleep</div></div>
		<div class="col_b col text"><div class="text">сон</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693418242"
		data-thing-id="311839194"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">sleep; slept; slept</div>
		</div>
		<div class="col_b col text">
			<div class="text">спать (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693483778"
		data-thing-id="311839195"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">take; took; taken</div></div>
		<div class="col_b col text">
			<div class="text">брать (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693549314"
		data-thing-id="311839196"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">nap</div></div>
		<div class="col_b col text"><div class="text">короткий сон</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693614850"
		data-thing-id="311839197"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">day nap</div></div>
		<div class="col_b col text"><div class="text">сончас</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693680386"
		data-thing-id="311839198"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">have a good night sleep</div>
		</div>
		<div class="col_b col text"><div class="text">хорошо спать ночью</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693745922"
		data-thing-id="311839199"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">take a day nap</div></div>
		<div class="col_b col text"><div class="text">вздремнуть</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693811458"
		data-thing-id="311839200"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">classical</div></div>
		<div class="col_b col text"><div class="text">классический</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693876994"
		data-thing-id="311839201"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">news</div></div>
		<div class="col_b col text"><div class="text">новость, новости</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436693942530"
		data-thing-id="311839202"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">classical music</div></div>
		<div class="col_b col text">
			<div class="text">классическая музыка</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694008066"
		data-thing-id="311839203"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sightseer</div></div>
		<div class="col_b col text">
			<div class="text">турист, осматривающий достопримечательности</div>
		</div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436694073602"
		data-thing-id="311839204"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">love</div></div>
		<div class="col_b col text"><div class="text">любить, любовь</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694139138"
		data-thing-id="311839205"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">travel</div></div>
		<div class="col_b col text">
			<div class="text">путешествие, путешествовать</div>
		</div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436694204674"
		data-thing-id="311839206"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">world</div></div>
		<div class="col_b col text"><div class="text">мир</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694270210"
		data-thing-id="311839207"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">around the world</div></div>
		<div class="col_b col text"><div class="text">по всему миру</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694335746"
		data-thing-id="311839208"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">meet; met; met</div></div>
		<div class="col_b col text">
			<div class="text">встречать (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694401282"
		data-thing-id="311839209"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">other</div></div>
		<div class="col_b col text"><div class="text">другие</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694466818"
		data-thing-id="311839210"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">tourist</div></div>
		<div class="col_b col text"><div class="text">турист</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436694532354"
		data-thing-id="311839211"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">city</div></div>
		<div class="col_b col text"><div class="text">город (большой)</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436694597890"
		data-thing-id="311839212"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">town</div></div>
		<div class="col_b col text"><div class="text">город (маленький)</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694663426"
		data-thing-id="311839213"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">talk</div></div>
		<div class="col_b col text"><div class="text">разговаривать</div></div>
	</div>
	<div
		class="thing text-text ignored"
		data-learnable-id="20436694728962"
		data-thing-id="311839214"
	>
		<div class="thinguser"><div class="status">Пропущено</div></div>
		<div class="ignore-ui pull-right">
			<input type="checkbox" checked="checked" />
		</div>
		<div class="col_a col text"><div class="text">about</div></div>
		<div class="col_b col text"><div class="text">о, про</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694794498"
		data-thing-id="311839215"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">journey</div></div>
		<div class="col_b col text"><div class="text">путешествие</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694860034"
		data-thing-id="311839216"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">exchange</div></div>
		<div class="col_b col text"><div class="text">обменивать</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694925570"
		data-thing-id="311839217"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">contact</div></div>
		<div class="col_b col text">
			<div class="text">контакт, контактировать</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436694991106"
		data-thing-id="311839218"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">then</div></div>
		<div class="col_b col text"><div class="text">затем, потом</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436695056642"
		data-thing-id="311839219"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">message</div></div>
		<div class="col_b col text">
			<div class="text">сообщение, писать сообщение</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436695122178"
		data-thing-id="311839220"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">each other</div></div>
		<div class="col_b col text">
			<div class="text">друг друга (обычно о двух)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436695187714"
		data-thing-id="311839221"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">message each other</div></div>
		<div class="col_b col text">
			<div class="text">переписываться друг с другом</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20436695253250"
		data-thing-id="311839222"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">now</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">exchange contacts</div></div>
		<div class="col_b col text">
			<div class="text">обмениваться контактами</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512292610"
		data-thing-id="313011357"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">his</div></div>
		<div class="col_b col text"><div class="text">его</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512358146"
		data-thing-id="313011358"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">son</div></div>
		<div class="col_b col text"><div class="text">сын</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512423682"
		data-thing-id="313011359"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">a lot of time</div></div>
		<div class="col_b col text"><div class="text">много времени</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512489218"
		data-thing-id="313011360"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">2 times a week</div></div>
		<div class="col_b col text"><div class="text">2 раза в неделю</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512554754"
		data-thing-id="313011361"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">gym</div></div>
		<div class="col_b col text"><div class="text">спортзал</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512620290"
		data-thing-id="313011362"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">this</div></div>
		<div class="col_b col text"><div class="text">этот, эта, это</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512685826"
		data-thing-id="313011363"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">aunt</div></div>
		<div class="col_b col text"><div class="text">тетя</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512751362"
		data-thing-id="313011364"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">uncle</div></div>
		<div class="col_b col text"><div class="text">дядя</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512816898"
		data-thing-id="313011365"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">Friday</div></div>
		<div class="col_b col text"><div class="text">пятница</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512882434"
		data-thing-id="313011366"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">her</div></div>
		<div class="col_b col text"><div class="text">её, ей</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513512947970"
		data-thing-id="313011367"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">parents</div></div>
		<div class="col_b col text"><div class="text">родители</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513013506"
		data-thing-id="313011368"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">life</div></div>
		<div class="col_b col text"><div class="text">жизнь</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513079042"
		data-thing-id="313011369"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">style</div></div>
		<div class="col_b col text"><div class="text">стиль</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513144578"
		data-thing-id="313011370"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">volleyball</div></div>
		<div class="col_b col text"><div class="text">волейбол</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513210114"
		data-thing-id="313011371"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">know; knew; known</div></div>
		<div class="col_b col text">
			<div class="text">знать (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513275650"
		data-thing-id="313011372"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">grandmother</div></div>
		<div class="col_b col text"><div class="text">бабушка</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513341186"
		data-thing-id="313011373"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">grandson</div></div>
		<div class="col_b col text"><div class="text">внук</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513406722"
		data-thing-id="313011374"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">goods</div></div>
		<div class="col_b col text"><div class="text">товары</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513472258"
		data-thing-id="313011375"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">pastry</div></div>
		<div class="col_b col text">
			<div class="text">кондитерские изделия (пирожные, печенье)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513537794"
		data-thing-id="313011376"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">open</div></div>
		<div class="col_b col text"><div class="text">открыть</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513603330"
		data-thing-id="313011377"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">ask</div></div>
		<div class="col_b col text"><div class="text">просить, спросить</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513668866"
		data-thing-id="313011378"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">ask for the bill</div></div>
		<div class="col_b col text"><div class="text">просить счёт</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513799938"
		data-thing-id="313011380"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">want</div></div>
		<div class="col_b col text"><div class="text">хотеть</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513865474"
		data-thing-id="313011381"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">cake</div></div>
		<div class="col_b col text">
			<div class="text">торт, пирожное, кекс</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513931010"
		data-thing-id="313011382"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">mother</div></div>
		<div class="col_b col text"><div class="text">мама</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513513996546"
		data-thing-id="313011383"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">ice</div></div>
		<div class="col_b col text"><div class="text">лед</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513514062082"
		data-thing-id="313011384"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">cream</div></div>
		<div class="col_b col text"><div class="text">крем, сливки</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513514127618"
		data-thing-id="313011385"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">once</div></div>
		<div class="col_b col text"><div class="text">один раз</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513514193154"
		data-thing-id="313011386"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">month</div></div>
		<div class="col_b col text"><div class="text">месяц</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513514258690"
		data-thing-id="313011387"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">ice-cream</div></div>
		<div class="col_b col text"><div class="text">мороженое</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20513514324226"
		data-thing-id="313011388"
	>
		<div class="thinguser">
			<i class="ico ico-water ico-blue"></i>
			<div class="status">in 3 hours</div>
		</div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">once a week</div></div>
		<div class="col_b col text"><div class="text">раз в неделю</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531560513794"
		data-thing-id="313286751"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">grandparents</div></div>
		<div class="col_b col text"><div class="text">дедушка и бабушка</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531560579330"
		data-thing-id="313286752"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">be; was, were; been</div>
		</div>
		<div class="col_b col text">
			<div class="text">быть (неправильный глагол)</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531560644866"
		data-thing-id="313286753"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">night sleep</div></div>
		<div class="col_b col text"><div class="text">ночной сон</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531560710402"
		data-thing-id="313286754"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">sister</div></div>
		<div class="col_b col text"><div class="text">сестра</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531560841474"
		data-thing-id="313286756"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">classes</div></div>
		<div class="col_b col text"><div class="text">занятия</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531560907010"
		data-thing-id="313286757"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">family</div></div>
		<div class="col_b col text"><div class="text">семья</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561038082"
		data-thing-id="313286759"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">father</div></div>
		<div class="col_b col text"><div class="text">отец</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561103618"
		data-thing-id="313286760"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">on TV</div></div>
		<div class="col_b col text"><div class="text">по телевизору</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561169154"
		data-thing-id="313286761"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">celebrate</div></div>
		<div class="col_b col text"><div class="text">праздновать</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561234690"
		data-thing-id="313286762"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">new</div></div>
		<div class="col_b col text"><div class="text">новый</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561300226"
		data-thing-id="313286763"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">year</div></div>
		<div class="col_b col text"><div class="text">год</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561365762"
		data-thing-id="313286764"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">with</div></div>
		<div class="col_b col text"><div class="text">с</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561431298"
		data-thing-id="313286765"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">toy</div></div>
		<div class="col_b col text"><div class="text">игрушка</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561496834"
		data-thing-id="313286766"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">rest</div></div>
		<div class="col_b col text"><div class="text">отдых</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561627906"
		data-thing-id="313286768"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">have a rest</div></div>
		<div class="col_b col text"><div class="text">отдыхать</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561693442"
		data-thing-id="313286769"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">the country</div></div>
		<div class="col_b col text">
			<div class="text">сельская местность, деревня, загородом</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561758978"
		data-thing-id="313286770"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">here</div></div>
		<div class="col_b col text"><div class="text">здесь</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561824514"
		data-thing-id="313286771"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">take photos of flowers</div>
		</div>
		<div class="col_b col text">
			<div class="text">фотографировать цветы</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561890050"
		data-thing-id="313286772"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">around</div></div>
		<div class="col_b col text"><div class="text">вокруг</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531561955586"
		data-thing-id="313286773"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">I'd like</div></div>
		<div class="col_b col text"><div class="text">Я бы хотел</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562021122"
		data-thing-id="313286774"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">friend</div></div>
		<div class="col_b col text"><div class="text">друг</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562086658"
		data-thing-id="313286775"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">meet friends</div></div>
		<div class="col_b col text">
			<div class="text">встречаться с друзьями</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562152194"
		data-thing-id="313286776"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">girl</div></div>
		<div class="col_b col text"><div class="text">девочка, девушка</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562217730"
		data-thing-id="313286777"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">another</div></div>
		<div class="col_b col text"><div class="text">другой</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562283266"
		data-thing-id="313286778"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">problem</div></div>
		<div class="col_b col text"><div class="text">проблема</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562348802"
		data-thing-id="313286779"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">boy</div></div>
		<div class="col_b col text">
			<div class="text">мальчик, молодой человек</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562414338"
		data-thing-id="313286780"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">minute</div></div>
		<div class="col_b col text"><div class="text">минута</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562479874"
		data-thing-id="313286781"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">exciting</div></div>
		<div class="col_b col text"><div class="text">захватывающий</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562545410"
		data-thing-id="313286782"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">go on journeys</div></div>
		<div class="col_b col text">
			<div class="text">ездить в путешествия</div>
		</div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562610946"
		data-thing-id="313286783"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text"><div class="text">interesting</div></div>
		<div class="col_b col text"><div class="text">интересный</div></div>
	</div>
	<div
		class="thing text-text"
		data-learnable-id="20531562676482"
		data-thing-id="313286784"
	>
		<div class="thinguser"><i class="ico ico-seed ico-purple"></i></div>
		<div class="ignore-ui pull-right"><input type="checkbox" /></div>
		<div class="col_a col text">
			<div class="text">live an interesting life</div>
		</div>
		<div class="col_b col text">
			<div class="text">жить интересной жизнью</div>
		</div>
	</div>
	<div class="things-footer things-row clearfix">
		<a
			class="
				ignore-save ignore-ui
				btn
				pull-right
				btn-primary btn-large btn-block
				hide
			"
		>
			Сохранить
		</a>
	</div>
</div>
  
`

let data: cardType[] = [];

test.querySelectorAll('.thing.text-text').forEach((item) => {
  let newDataElement: {
    rus: string | null | undefined,
    en: string | null | undefined
  } = {
    rus: '',
    en: ''
  };
  newDataElement.en = item.querySelector('.col_a .text')?.textContent;
  newDataElement.rus  = item.querySelector('.col_b .text')?.textContent;
  if (newDataElement.rus && newDataElement.en) data.push(newDataElement as cardType);
});

export default data;