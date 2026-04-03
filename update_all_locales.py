#!/usr/bin/env python3
import json
import os

# Define all translations
translations = {
    'ja': {  # Japanese
        'legal': {
            'problems': {
                'title': 'あなたの事務所は請求可能時間を失血しています',
                'items': [
                    '平均的な弁護士は、時間入力、期限追跡、文書ファイリングなど、請求対象外の管理業務で週8-12時間を失っています。時間単価300ドルでは、年間125,000ドル以上の価値が流出していることになります。',
                    'ボイスメモと手書きメモは数日間転写されずに放置されます。誰かが処理する頃には文脈が失われ、請求精度が低下します。研究によると、時間入力の遅れにより事務所は10-30%の請求不足に陥っています。',
                    '消滅時効を一回逃すだけで事件と経歴を失う可能性があります。スプレッドシートベースの期限追跡は50件を超えるとスケールせず、一回のミスのコストは破滅的です。'
                ]
            },
            'examples': {
                'title': '資金回収。時間奪還。期限遵守。',
                'items': [
                    {
                        'title': '90日間で327請求時間を回収',
                        'desc': '人身傷害事務所は時間入力のバックログで週8-12時間を失っていました。弁護士は証言録取と顧客電話の一日を終えた後、記憶から請求メモを再構築する1時間に直面していました。',
                        'real': '各電話や会議後に音声口述を受け入れるAIを展開しました。弁護士が「ジョンソン遺産の不当死亡事件で45分間、医療記録の確認と和解範囲の議論を終了」と言うと、AIはそれを0.75時間として記録し、正しいファイルにコーディングし、正しい請求レートを適用します。3か月で、事務所は以前請求されていなかった327時間を回収しました。'
                    },
                    {
                        'title': '6時間から20分へ：ゾーニング研究',
                        'desc': '不動産弁護士は、48時間以内に市の聴聞会に直面するクライアントのために、複合用途ゾーニング変更の先例研究が必要でした。通常研究を担当するアソシエイトは休暇中でした。',
                        'real': 'AIは3つの管轄区域の判例法を検索し、11の関連先例を特定し、引用と推奨事項付きの4ページの研究メモを起草しました。パートナーはそれを確認し、軽微な編集を行い、提出しました。弁護士の総時間：6時間の研究ではなく20分の確認。'
                    },
                    {
                        'title': '340ファイルで消滅時効ゼロ',
                        'desc': '訴訟専門事務所は共有スプレッドシートで消滅時効期間を追跡していました。一度のニアミスで管理パートナーは真の解決策を探すようになりました。',
                        'real': 'AIは現在すべてのアクティブファイルを監視し、取込データから消滅時効日を計算し、段階的なリマインダーを送信します：90日、30日、14日、7日、その後毎日。裁判所カレンダーとクロスリファレンスし、競合をフラグします。14か月で340のアクティブファイルで期限ミスゼロ。スプレッドシートは廃棄されました。'
                    },
                    {
                        'title': 'エレベーターで降りる前に証言メモ転写完了',
                        'desc': '訴訟弁護士は、タイピングが対立的に感じられるため、証拠開示聴聞会中に手書きメモを取ります。問題：これらのメモは誰かがタイプアップするまで法的パッドに数週間座っています。',
                        'real': '現在弁護士は各聴聞会後にメモを撮影し、メッセージで画像を送信します。AIは手書き文字を転写し、トピック別に整理し、行動項目にフラグを立て、ケースにファイルします。タイプされたメモは弁護士が車に到着する前にケースファイルに到着します。'
                    }
                ]
            }
        },
        'manufacturing': {
            'problems': {
                'title': '隠れたコストがあなたのマージンを食い潰している',
                'items': [
                    '経営陣は毎朝45分以上を断片化されたシステムの情報発掘に費やしています：メール、ERP、スプレッドシート、生産ダッシュボード。これは年間180時間以上の上級リーダーの時間が意思決定ではなく情報検索に使われていることを意味します。',
                    '供給業者価格差異、品質拒否傾向、在庫不足は、誰もリアルタイムでデータを監視していないため、数週間または数か月後に浮上します。それを見る頃には、損害は6桁です。',
                    '月末報告は、手動AR老化、調整、データフォーマットで経理チームの2-3日を消費します。これは年間30日以上を報告に基づいて行動するのではなく、報告を作成することに費やしていることを意味します。'
                ]
            },
            'examples': {
                'title': 'コスト削減。問題の早期発見。自動実行レポート。',
                'items': [
                    {
                        'title': '供給業者価格ドリフト発見で18万ドル節約',
                        'desc': '精密工具メーカーは12の供給業者からニッケル、銅、特殊合金を調達しています。価格は四半期ごとに変動し、一人の調達マネージャーが常に1か月遅れのスプレッドシートでこれらすべてを追跡しています。',
                        'real': 'AIは供給業者ポータルと発注書から毎日価格データを取得し、契約料金と比較し、3%を超える差異にフラグを立てます。最初の月以内に、ニッケル供給業者が繰り返し注文で合意料金より7%高く請求していることを発見しました。これは5か月間気づかれずに続いていた過剰請求です。修正請求書：18万ドル回収。'
                    },
                    {
                        'title': '実際に読まれる朝のブリーフィング',
                        'desc': 'プラント責任者は品質、保守、物流、営業からの200通以上の夜間メールに埋もれていました。重要なシグナルは埋もれていました。毎日の朝礼は「私は何を逃しましたか？」で始まりました。',
                        'real': 'AIは現在午前6時に単一のブリーフィングを配信します：夜間生産出力対目標、設備アラーム、承認待ちPO、60日超AR項目、および当日の会議スケジュール。電話で2タップ、コーヒー片手に。責任者は45分間の受信箱掘りを置き換えたと言いました。'
                    },
                    {
                        'title': '品質拒否パターンを3週間早期発見',
                        'desc': '超研磨材メーカーは融合接合ラインで間欠的な品質拒否を見ていました。拒否は個別には許容範囲内でしたが、傾向は日次数値では見えませんでした。',
                        'real': 'AIは製品ライン、シフト、機械別に拒否率を追跡します。ライン3の第2シフトのみで週1.2%の増加にフラグを立て、特定の原料バッチと相関させました。保守は炉熱電対校正ドリフトを発見しました。顧客返品を引き起こす3週間前に捉えました。'
                    },
                    {
                        'title': '自動実行売掛金老化レポート',
                        'desc': '中規模メーカーの月末は、経理事務員がARデータを引き出し、フォーマットし、延滞口座の文脈について営業担当者を追いかけ、CFO用のレポートを作成するために2日間を意味していました。',
                        'real': 'AIは毎週月曜日の朝に完全な売掛金老化内訳を生成します：30/60/90/120+日バケットでソートされ、最後の連絡日と営業担当者のメモで注釈付けされ、先週以来しきい値を越えた口座にフラグを立てます。2日のプロセスは現在5分の確認です。'
                    }
                ]
            }
        },
        'realEstate': {
            'problems': {
                'title': '逃したフォローアップは失った手数料',
                'items': [
                    '平均的なエージェントは遅いフォローアップで四半期ごとに2-3件の取引を失います。平均15,000ドルの手数料では、年間60,000-90,000ドルの収入がより速い競合他社に流れていることになります。',
                    '手動CMA調査は1リスティングあたり2-4時間かかります。あなたが比較可能物件を引き出している間、売主は他の3つの意見を受け取っています。数値を持つ最初のエージェントがリスティング予約を勝ち取ります。',
                    '8回以上の物件見学の調整、多言語クライアントの管理、同時に30以上の見込み客を温かく保つことは、一人では物理的に不可能です。球を落とすか、ビジネスにキャップをかけるかです。'
                ]
            },
            'examples': {
                'title': 'より多くの取引成立。より速い応答。見込み客ゼロドロップ。',
                'items': [
                    {
                        'title': '14リスティングをソロで管理、フォローアップ無失敗',
                        'desc': '14のアクティブリスティングを扱うトップエージェントがフォローアップを落としていました。買い手が物件を見学し、興味を表明し、その後1週間何も聞きませんでした。コミュニケーションの沈黙期間中に競合オファーのため四半期で3件の取引が失敗しました。',
                        'real': 'AIは各見学後4時間以内に個人化されたフォローアップを送信します：「今日42 Maple Driveを訪問していただきありがとうございます。学区について質問されたのに気づきました、こちらが最新の評価です。」応答パターンを追跡し、ホットな見込み客をエスカレートします。フォローアップ率は60%から100%に向上しました。エージェントは次の四半期で14リスティングのうち11を成約しました。'
                    },
                    {
                        'title': 'リスティング予約中に比較レポート生成',
                        'desc': '売主がリスティング予約中に「私の家の価値は？」と尋ねます。エージェントは以前「明日CMAをお送りします」と言っていました。売主はそのCMAが届く前に他の3つの意見を得るでしょう。',
                        'real': '今エージェントはキッチンからAIにメッセージします：「4ベッド2バス、2,100平方フィート、1998年築、42 Maple Dr。」90秒以内に、AIは過去6か月で800m以内の8つの比較可能売上を引き出し、ロットサイズと条件で調整し、フォーマットされた比較レポートを配信します。エージェントは予約が終わる前に電話でそれを示しました。'
                    },
                    {
                        'title': '中国語買い手に完全に中国語でサービス',
                        'desc': '上海からの転勤クライアントは2人の学齢の子供のための近隣調査が必要でした。紹介エージェントは英語のみを話し、中国語を話す競合他社にクライアントを失っていました。',
                        'real': 'AIは中国語ですべてのコミュニケーションを処理しました：学校評価、歩行可能性スコア、クライアントの新しいオフィスへの通勤時間、および近くの中国食材店を調査しました。中国語と英語の両方で近隣比較レポートを配信しました。クライアントは残り、6週間で家を購入しました。'
                    },
                    {
                        'title': '8回見学、スケジュール競合ゼロ',
                        'desc': '買い手エージェントが土曜日に市内で8回の見学をスケジュールしました。2人の売主が最後の瞬間に利用可能性を変更しました。1人の買い手が20分遅れていました。通常の結果：混乱、見逃したスロット、謝罪ボイスメール。',
                        'real': 'AIはリアルタイムでルートを再最適化し、すべての当事者に更新された確認を送信し、2つの競合を午後のオープンスロットに再スケジュールし、買い手のピックアップ時間を調整しました。8回の見学がすべて完了しました。買い手はその夜見学#6でオファーを入れました。'
                    }
                ]
            }
        }
        # Add content, software, accounting here...
    },
    'ko': {  # Korean
        'legal': {
            'problems': {
                'title': '당신의 로펌이 청구 가능 시간을 출혈하고 있습니다',
                'items': [
                    '평균 변호사는 시간 입력, 마감일 추적, 문서 보관 등 청구할 수 없는 관리 업무로 주당 8-12시간을 잃습니다. 시간당 $300에서 연간 $125,000 이상의 가치가 빠져나가는 것입니다.',
                    '음성 메모와 손으로 쓴 메모는 며칠 동안 전사되지 않고 방치됩니다. 누군가 처리할 때쯤에는 맥락이 손실되고 청구 정확도가 떨어집니다. 연구에 따르면 늦은 시간 입력으로 인해 로펌은 10-30% 과소 청구합니다.',
                    '소멸시효를 한 번 놓치면 사건과 경력을 잃을 수 있습니다. 스프레드시트 기반 마감일 추적은 50개 파일을 넘어서면 확장되지 않으며, 한 번의 실수 비용은 파멸적입니다.'
                ]
            },
            'examples': {
                'title': '자금 회수. 시간 회복. 마감일 준수.',
                'items': [
                    {
                        'title': '90일 만에 327 청구 시간 회수',
                        'desc': '인신 상해 로펌은 시간 입력 백로그로 주당 8-12시간을 잃고 있었습니다. 변호사들은 하루의 증언록취와 고객 통화를 마친 후 기억으로부터 청구 메모를 재구성하는 1시간에 직면했습니다.',
                        'real': '각 통화나 회의 후 음성 지시를 받아들이는 AI를 배치했습니다. 변호사가 "Johnson 재산 부당 사망 건에서 45분을 마쳤고, 의료 기록을 검토하고 합의 범위를 논의했다"고 말하면, AI는 이를 0.75시간으로 기록하고 올바른 파일에 코딩하며 정확한 청구 요율을 적용합니다. 3개월 만에 로펌은 이전에 청구되지 않았던 327시간을 회수했습니다.'
                    }
                    # ... more examples
                ]
            }
        }
        # Add other industries...
    },
    'es': {  # Spanish
        'legal': {
            'problems': {
                'title': 'Su Bufete Está Perdiendo Horas Facturables',
                'items': [
                    'El abogado promedio pierde 8-12 horas por semana en tareas administrativas no facturables: entrada de tiempo, seguimiento de fechas límite, archivo de documentos. A $300/hora, eso es más de $125,000 anuales de valor que se evapora.',
                    'Los memos de voz y notas manuscritas permanecen sin transcribir durante días. Para cuando alguien se ocupa de ellos, el contexto se pierde y la precisión de facturación disminuye. Los estudios muestran que los bufetes subfacturan un 10-30% debido a la entrada tardía de tiempo.',
                    'Una fecha de prescripción perdida puede costar un caso y una carrera. El seguimiento de fechas límite basado en hojas de cálculo no escala más allá de 50 archivos, y el costo de una sola falla es catastrófico.'
                ]
            },
            'examples': {
                'title': 'Dinero Recuperado. Horas Reclamadas. Fechas Límite Cumplidas.',
                'items': [
                    {
                        'title': '327 Horas Facturables Recuperadas en 90 Días',
                        'desc': 'Un bufete de lesiones personales perdía 8-12 horas por semana en atraso de entrada de tiempo. Los abogados terminaban un día de declaraciones y llamadas de clientes, luego enfrentaban una hora de reconstruir notas de facturación de memoria.',
                        'real': 'Implementamos una IA que acepta dictado por voz después de cada llamada o reunión. El abogado dice "acabo de terminar 45 minutos con el patrimonio Johnson sobre el asunto de muerte injusta, revisando registros médicos y discutiendo rango de acuerdo." La IA lo registra como 0.75 horas, lo codifica al archivo correcto, y aplica la tarifa de facturación correcta. En tres meses, el bufete recuperó 327 horas que no se estaban facturando anteriormente.'
                    }
                    # ... more examples
                ]
            }
        }
        # Add other industries...
    },
    'pt': {  # Portuguese
        'legal': {
            'problems': {
                'title': 'Seu Escritório Está Sangrando Horas Faturáveis',
                'items': [
                    'O advogado médio perde 8-12 horas por semana em tarefas administrativas não faturáveis: entrada de tempo, rastreamento de prazos, arquivamento de documentos. A $300/hora, são mais de $125.000 anuais de valor que evapora.',
                    'Memorandos de voz e notas manuscritas ficam sem transcrição por dias. Quando alguém finalmente os processa, o contexto se perde e a precisão da cobrança diminui. Estudos mostram que escritórios subfaturam 10-30% devido à entrada tardia de tempo.',
                    'Um prazo prescricional perdido pode custar um caso e uma carreira. O rastreamento de prazos baseado em planilhas não escala além de 50 arquivos, e o custo de uma única falha é catastrófico.'
                ]
            },
            'examples': {
                'title': 'Dinheiro Recuperado. Horas Reclamadas. Prazos Cumpridos.',
                'items': [
                    {
                        'title': '327 Horas Faturáveis Recuperadas em 90 Dias',
                        'desc': 'Um escritório de lesões corporais perdia 8-12 horas por semana no backlog de entrada de tempo. Os advogados terminavam um dia de depoimentos e chamadas de clientes, depois enfrentavam uma hora de reconstruir notas de cobrança da memória.',
                        'real': 'Implementamos uma IA que aceita ditado por voz após cada chamada ou reunião. O advogado diz "acabei de terminar 45 minutos com o espólio Johnson sobre o caso de morte injusta, revisando registros médicos e discutindo faixa de acordo." A IA registra como 0.75 horas, codifica no arquivo correto, e aplica a taxa de cobrança correta. Em três meses, o escritório recuperou 327 horas que não estavam sendo faturadas anteriormente.'
                    }
                    # ... more examples
                ]
            }
        }
        # Add other industries...
    }
}

def update_locale_file(locale_code, locale_data):
    """Update a locale file with the translated industry data"""
    file_path = f'src/locales/{locale_code}.json'
    
    try:
        # Read existing file
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Update industries if they exist in translations
        if locale_code in translations:
            for industry_key, industry_data in translations[locale_code].items():
                if industry_key in data.get('industries', {}):
                    if 'problems' in industry_data:
                        data['industries'][industry_key]['problems'] = industry_data['problems']
                    if 'examples' in industry_data:
                        data['industries'][industry_key]['examples'] = industry_data['examples']
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f'Updated {locale_code} file')
        
    except Exception as e:
        print(f'Error updating {locale_code}: {e}')

# Update all locale files
locales = ['ja', 'ko', 'es', 'pt']
for locale in locales:
    update_locale_file(locale, translations.get(locale, {}))

print('Completed updating all locale files')